import {useState} from 'react'

const useForm = (inicial) => {
    const [formulario, setFormulario] = useState(inicial)
    const handleChange = ({target}) => {
      setFormulario({
        ...formulario,
        [target.name]: target.value
      })
    }
    const reset = () => {
      setFormulario(inicial)
    }
    return [formulario, handleChange, reset]
}

export default useForm