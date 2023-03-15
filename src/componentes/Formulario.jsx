import {useForm} from "react-hook-form"

const Formulario = () =>{

    const {register,formState:{errors}, handleSubmit}=useForm();
    const onSubmit=(data)=>{
        console.log(data);
    }

    return <div className="container mt-4"><div className="card"><div className="card-body">
        <h2>DATOS DEL ESTUDIANTE:</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div  className="row">
                <div className="col-sm-6">
                    <label class="form-label">Nombre</label>
                    <input className="form-control"  type="text" {...register('nombre',{
                        required:true,
                        maxLength:10
                    })}/>
                    {errors.nombre?.type==='required' && <p>el campo nombre es requerido</p>}
                </div>
                <div className="col-sm-6">    
                    <label class="form-label">Direccion</label>
                    <input className="form-control col-sm-6" type="text" {...register('direccion')}/>
                </div>
            </div>
            <div className="row">
                <label class="form-label">Edad</label>
                <input class="form-control col-sm-6" type="text" {...register('edad')}/>
            </div>
            <input class="btn btn-info" type="submit"  value="Enviar"/>
        </form>
    </div></div></div>
}

export default Formulario;