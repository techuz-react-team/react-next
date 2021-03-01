import React, { useState, useCallback, useMemo } from "react";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { CREATE_REPO, GET_REPOSITORIES } from "../queries/queries";
import { RepoFormData } from "../types";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
 
const CreateRepoForm: React.FC<any> = ({}) => {

  // const validationSchema = Yup.object().shape({
  //   name: Yup.string().required("Repository name is required1"),
  //   visibility: Yup.string().required("Visibility is required,,"),
  // });
  const validationSchema = useMemo(() => (
    yup.object().shape({
      name: yup.string().required("Repository name is required..."),
      visibility: yup.string().required("Visibility is required11"),
    })
  ), [])

  const { register, handleSubmit, errors } = useForm<RepoFormData>({
    resolver: yupResolver(validationSchema)
  });

  // const handleCreateRepo = useCallback((formValues: RepoFormData) => {
  //   console.log(formValues);
  // }, []);


  const [name, setName] = useState("");
  const [visibility, setVisibility] = useState("");


  const [createRepo, { error, data }] = useMutation<{
    createRepo: RepoFormData;
  }>(CREATE_REPO, {
    variables: { name, visibility },
  });

  const handleCreateRepo = (formData: any) => {
    alert(JSON.stringify(formData));
    createRepo({
      variables: { name, visibility },
      refetchQueries: [{ query: GET_REPOSITORIES }],
    });
    setName('');
    setVisibility('')
  };

  return (
    <div>
      <h3>Create Repository</h3>
      {error ? <p>Oh no! {error.message}</p> : null}
      {data && data.createRepo ? <p>Saved!</p> : null}
      <form onSubmit={handleSubmit(handleCreateRepo)}>
      <div className="form-group col-6">
          <label>Name</label>
          <input
            ref={register({required: true })}
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.name?.message}</div>
        </div>
        <div className="form-group col-6">
          <label>Visibility</label>
          <select
            ref={register({required: true })}
            name="visibility"
            onChange={(e) => setVisibility(e.target.value)}
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
          >
            <option value="">Select visibility</option>
            <option value="PRIVATE">PRIVATE</option>
            <option value="PUBLIC">PUBLIC</option>
          </select>
          <div className="invalid-feedback">{errors.name?.message}</div>
        </div>
        <button type="submit">Create Repo</button>
      </form>
    </div>
  );
};

export default CreateRepoForm;
