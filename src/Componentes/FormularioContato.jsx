import { Formik, Field, Form } from 'formik';
import '../pages/Contato/Contato.css';
import * as Yup from 'yup';



const esquema = Yup.object().shape({
    nome: Yup.string().required("Campo obrigatório"),
    email: Yup.string().email("E-mail inválido").required("Campo obrigatório"),
    telefone: Yup.string().matches(/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/, "Telefone inválido)").required("Campo obrigatório"),
    mensagem: Yup.string().required("Campo obrigatório")
    
});


export default function Formulario() {
    return (
        <Formik
            initialValues={{
                nome: "",
                email: "",
                telefone: "",
                mensagem: "",

            }}
            validationSchema={esquema}
            onSubmit={values => {
                alert(values);
            }}
        >


            <Form className='formulario'>
                <label htmlFor="nome">Nome Completo  </label>
                <Field className='input' id="nome" name="nome" type="text" />

                <label htmlFor="email">E-mail</label>
                <Field className='input' id="email" name="email" type="email" />
 
               
                <label htmlFor="telefone">Telefone</label>
                <Field className='input' id="telefone" name="telefone" type="text" />

                <label htmlFor="bairro">Mensagem</label>
                <Field className='input' id='mensagem' name="mensagem" type="text" />
                <button type="submit">Enviar</button>
            </Form>

        </Formik>
    );
};

