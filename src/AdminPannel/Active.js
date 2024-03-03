import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Active() {
    const [datas, setDatas] = useState([])

    useEffect(() => {
        axios.get('https://65e3567b88c4088649f5a918.mockapi.io/ecommerce')
            .then(res => {

                setDatas(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const tableInfor = datas.map(data => <tr key={data.id}>
        <td>{data.id}</td>
        <td>{data.title}</td>
        <td><img style={{ width: "100px" }} src={data.avatar} alt='productimg' /></td>
        <td>{data.price}</td>
        <td>{data.proCateogry}</td>
        <td>{data.info}</td>
    </tr>)

    return (
        <>
            <h1 className='bg-dark-subtle p-3'>User Active </h1>
            <table>
                <tr>
                    <th>Id</th>
                    <th>title</th>
                    <th>avatar</th>
                    <th>price</th>
                    <th>proCateogry</th>
                    <th>info</th>
                </tr>
                {
                    tableInfor
                }
            </table>
        </>
    )
}

export default Active