const CreateRepo: React.FC<any> = ({}) => { 
  return(
    <div> create repo</div>
  )
}
export default CreateRepo;

// import React from "react";
// import { Formik, ErrorMessage } from "formik";
// import { Input, Button, Form } from "antd";
// import * as Yup from "yup";

// const CreateRepo: React.FC<any> = ({}) => {
//   const createRepo = Yup.object().shape({
//     name: Yup.string().required("Repository name is required"),
//     visibility: Yup.string().required("Visibility is required"),
//   });

// 	const handleSubmit = (data: any) => {
// 		// this.props.login(data);
//   };
  
//   return (
//     <div className="container-body">
//       <Formik
//         initialValues={{
//           name: "",
//           visibility: "",
//         }}
//         validationSchema={createRepo}
//         onSubmit={handleSubmit}
//         render={({ handleSubmit, handleChange, values }) => (
//           <Form onSubmit={handleSubmit}>
//             <Form.Item>
//               <Input
//                 type="text"
//                 onChange={handleChange}
//                 value={values.name}
//                 name="name"
//                 placeholder="Enter Repo Name"
//               />
//               <ErrorMessage bottom component={ErrorBlock} name="email" />
//             </Form.Item>
//             <Form.Item>
//               <Input
//                 type="password"
//                 onChange={handleChange}
//                 value={values.password}
//                 name="password"
//                 placeholder="Password"
//               />
//               <ErrorMessage bottom component={ErrorBlock} name="password" />
//             </Form.Item>
//             <Button htmlType="submit" className="btn" type="primary">
//               Signin
//             </Button>
//           </Form>
//         )}
//       />
//       <hr className="divider" />
//       <div className="form-group">
//         <div className="forgot-part text-right">
//           <span className="forgot" onClick={onRegister}>
//             Register your account?
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreateRepo;
