type Params = Promise<{ slug: string }>;

export default async function Page(props: { params: Params}) {
  const params = await props.params;
  const slug = await params.slug;

  return (
    <div style={{ color: 'black'}}>
      <h1>Article about { slug }</h1>
    </div>
  )
}