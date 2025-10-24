

export default async function User(props: any){


    const user = await props.params;

  

    return <h1>username: {user.username}</h1>

}