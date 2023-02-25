import React from 'react'

const index = ({data}) => {
  return (
    <div>
        <h1 className='content'>{data}</h1>
    </div>
  )
}

export default index

export async function getStaticProps(context) {
    return {
        props: {
            data: context.preview ? "List of draft articles" : "list of published articles",
        },
    }
}

