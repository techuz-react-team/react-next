import Head from 'next/head'
import Profile from '../components/profile'
import Repository from '../components/repository'
import CreateRepoForm from '../components/createNewRepo'

export default function IndexPage({}) {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <Profile />
        <CreateRepoForm />
        <Repository />
      </main>

     </div>
  )
}
