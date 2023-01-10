import { useRouter } from "next/router"

export default function DocsPage() {
  const router = useRouter()
  const { params=[] } = router.query
  console.log('params=',params)
  return (
    <div>Docs Page</div>
  )
}
