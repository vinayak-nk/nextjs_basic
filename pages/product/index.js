import Link from "next/link"

export default function ProductLsi() {
  return (
    <>
      <Link href="/">Home</Link>
      {[1,2,3,4,5].map((id) => (
        <h3 key={id}><Link href={`/product/${id}`}>{`Product ${id}`}</Link></h3>
      ))}
      <Link href="/product/replace" replace>Product Replace</Link>
    </>
  )
}
