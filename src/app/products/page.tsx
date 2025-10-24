

const page = async({params, searchParams}: {
    params: Promise<{slug: string}>
    searchParams: Promise<{[key: string]: string | string[] | undefined}>
}) => {


    const searchParam = await searchParams;

  const catagory = searchParam?.catagory || "all";
  const sort = searchParam?.sort || "default";
  const page = searchParam?.page || 1;



  return (
    <div>SEARCH-PARAMS</div>
  )
}

export default page;