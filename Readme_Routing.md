create-next-app . or create-next-app app_name

1. Page based routing
2. Nested Routes -> nested folders
3. Dynamic routes -> []
4. Catch all routes -> [...] - useful when some route params are optional
5. Link
6. useRouter -> push, replace
7. 404.js

useRouter
============
import { useRouter } from "next/router"
const router = useRouter()
const { params=[] } = router.query
router.push('/product')

Link
========
import Link from "next/link"
<Link href="/">Home</Link>

<Link href="/product/replace" replace>Product Replace</Link>

404
========
404.js - custom styles

Dynamic routes
===============
[folder_name]
[[route_name]]