import Link from 'next/link'

function Home() {
  return (
    <>
      <h1>Next JS Pre-rendering</h1>
      <Link href="/users">
        <a>Users</a>
      </Link>
      <br />
      <Link href="/posts">
        <a>Post</a>
      </Link>
      <br />
      <Link href="/news">
        <a>News</a>
      </Link>
      <br />
      <Link href="/dashboard">
        <a>Dashboard</a>
      </Link>
    </>
  )
}

export default Home