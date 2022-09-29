const EmpleadoAvatar = ({empleado}) => {
  return (
    <div>
      <img
        className="img-fluid w-50 float-start"
        src={empleado.pic}
        alt="avatar"
      />
    </div>
  )
}

export default EmpleadoAvatar
