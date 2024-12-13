import RegisterForm from '@/components/forms/RegisterForm'
import { getUser } from '@/lib/actions/member.actions'
import { SearchParamProps } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Register = async ({params: {userId}}: SearchParamProps) => {
  const user = await getUser(userId);
  return (
    <div className="flex h-screen max-h-screen">
    <section className="remove-scrollbar container my-auto">
      <div className="sub-container max-w-[496] flex">
        <Image
          src="/assets/quds-logo/logo.svg"
          height={1000}
          width={1000}
          alt="PMML"
          className="mb-12 h-10 w-fit "
        />
        <p className="m-1 pl-3 pt-1">Masjid Al Qudus</p>


      </div>
      <RegisterForm user={undefined} />
      <div className="text-sm mt-20 flex justify-between">
        <p className="justify-items-end text-dark-600 xl:text-left">
          @ 2024 DevSTRIM
        </p>
        <p >
          <Link href="/?admin=true" className="text-green-500">
            Admin
          </Link>
        </p>
      </div>


    </section>

    <Image
          src="/assets/quds-logo/logo.svg"
          height={1000}
          width={1000}
          alt="PMML"
          className="side-img max-w-[50%]"
        />
  </div>


    // <div className='flex h-screen max-h-screen'>
    //     <section className='remove-scrollbar container'>
    //     <div className='sub-container mx-w[860px] flex-1 flex-col py-10'>
    //     <Image
    //         src="/assets/logo/pmml-logo.svg"
    //         height={1000}
    //         width={1000}
    //         alt="PMML"
    //         className="mb-12 h-10 w-fit "
    //       />

    //     </div>
    //     </section>
    // </div>
  )
}

export default Register