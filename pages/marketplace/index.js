
import { WalletBar } from "@components/ui/web3"
import { CourseList } from "@components/ui/course"
import { BaseLayout } from "@components/ui/layout"
import { getAllCourses } from "@content/courses/fetcher"
import { useAccount } from "@components/web3/hooks/useAccount"
import { useNetwork } from "@components/web3/hooks/useNetwork"
import { useEffect, useState } from "react"

export default function Marketplace({courses}) {

    const {account} = useAccount();
    const {network} = useNetwork();
    
    const [netId, setNetId] = useState(null)

    useEffect(() => {
      const loader = () => {
        setNetId(network.data)
      }
      loader()
    }, [network])

    const [id, setId] = useState(null)

    useEffect(() => {
      if (typeof netId === 'bigint') {
        setId(netId.toString())
      }
    }, [typeof netId === 'bigint'])



  return (
    <>
        <WalletBar network = {id} />
        <CourseList
            courses={courses}
        />
    </>
  )
}

export function getStaticProps() {
  const { data } = getAllCourses()
  return {
    props: {
      courses: data
    }
  }
}

Marketplace.Layout = BaseLayout
