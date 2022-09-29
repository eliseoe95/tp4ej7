import { useEffect, useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import EmpleadoRow from './EmpleadoRow'

const EmpleadoList = () => {
  // let Empleado = {
  //     id: 1,
  //     nombreApellido: 'Laya, Dueñas',
  //     titulo: 'Ceo',
  //     area: 'Business',
  //     imagen: 'https://d33i2jw1rbe4t6.cloudfront.net/uploads/company/logo/290/medium_64044245-830f-443f-b4dc-99589c07ad27.png',
  // }
  let empleados = [
    {
      id: 1,
      fullName: 'Laya Dueñas',
      title: 'CEO',
      department: 'Business',
      pic:
        'https://media.istockphoto.com/photos/cute-girl-cartoon-design-with-a-smiling-face-picture-id1384157766?k=20&m=1384157766&s=612x612&w=0&h=dp8IGTEj5OFblnDCqaIqB6MA_jhxC__qlDGWsa3B1wU=',
    },
    {
      id: 2,
      fullName: 'Astryd Vallés',
      title: 'CMO',
      department: 'Marketing',
      pic:
        'https://media.istockphoto.com/photos/illustration-of-smiling-woman-angela-in-headphones-make-video-call-or-picture-id1404630734?k=20&m=1404630734&s=612x612&w=0&h=4Bcp7EJ8GUwc1lMGBJ5taAo9Qo0T325M7cr0FDsMJkM=',
    },
    {
      id: 3,
      fullName: 'Shantell Meza',
      title: 'CFO',
      department: 'Business',
      pic:
        'https://media.istockphoto.com/photos/young-happy-girl-dances-jumps-levitates-and-flies-her-arms-up-in-picture-id1208561074?k=20&m=1208561074&s=612x612&w=0&h=43Hm5sYjJch8OnVfRpDD3BWW2p5aYKaCG_1Z82J2oJI=',
    },
    {
      id: 4,
      fullName: 'Sergio Ocampo',
      title: 'CTO',
      department: 'Engineering',
      pic:
        'https://media.istockphoto.com/photos/illustration-of-standing-happy-man-talking-on-the-phone-cute-cartoon-picture-id1299126965?k=20&m=1299126965&s=612x612&w=0&h=hxRjmZsqJ9lCzWAlvIXlPO9a8jo48BIHMPC7qWS8hM4=',
    },
    {
      id: 5,
      fullName: 'Ares Jiménez',
      title: 'Art Director',
      department: 'Marketing',
      pic:
        'https://media.istockphoto.com/photos/illustration-of-man-with-smartphone-cartoon-smiling-businessman-using-picture-id1296450494?k=20&m=1296450494&s=612x612&w=0&h=I1CDVaLNNnw_3opmDR7RikRmP5ZBAAAjdWs2y0mIdtM=',
    },
    {
      id: 6,
      fullName: 'Marta Pérez',
      title: 'Frontend Dev',
      department: 'Engineering',
      pic:
        'https://media.istockphoto.com/vectors/business-women-3d-character-vector-illustration-of-standing-cartoon-vector-id1414846895?k=20&m=1414846895&s=612x612&w=0&h=jkemdzBbFJBFAmd0OIWSTG1VC3sIxW_wf_H8BvACVnw=',
    },
    {
      id: 7,
      fullName: 'Ellen Balderas',
      title: 'Digital Strategist',
      department: 'Marketing',
      pic:
        'https://media.istockphoto.com/photos/young-woman-is-smiling-holding-a-cup-of-coffee-picture-id853133976?k=20&m=853133976&s=612x612&w=0&h=AnjWTYa1Dlyp8b8rskuoh97TBuZwK07YtSoQtmyGtp0=',
    },
    {
      id: 8,
      fullName: 'Cynthia Valentín',
      title: 'Backend Dev',
      department: 'Engineering',
      pic:
        'https://media.istockphoto.com/vectors/cartoon-character-young-woman-standing-choosing-between-two-ways-at-vector-id1314418190?k=20&m=1314418190&s=612x612&w=0&h=uTXaHqIZCDsY-0RwIS00ZcRvZaqmJdKL_Dy_wj3g2Ws=',
    },
    {
      id: 9,
      fullName: 'Bernard Jung',
      title: 'DevOps Engineer',
      department: 'Engineering',
      pic:
        'https://media.istockphoto.com/photos/male-cartoon-illustration-with-a-glass-of-water-picture-id1324623816?k=20&m=1324623816&s=612x612&w=0&h=rxnBPdoBddUcvLFhq4iqJQ6IWQaa0r-CUuS4MnqWtcs=',
    },
  ]

  const [empleado] = useState(empleados)
  useEffect(() => {
    localStorage.setItem('empleados', JSON.stringify(empleado))
  }, [empleado])

  return (
    <>
      <ListGroup>
        {empleado.map((empleado, posicion) => (
          <EmpleadoRow empleado={empleado} key={posicion}></EmpleadoRow>
        ))}
      </ListGroup>
    </>
  )
}

export default EmpleadoList
