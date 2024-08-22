import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

let renderCount = 0;

const YouTubeForm = () => {

    const form = useForm({
        defaultValues: {
            username: "",
            email: "",
            channel: "",
            social: {
                "twitter": "",
                "facebook": "",
            },
            phoneNumbers: ["", ""],
            skills: [{"language": ""}],
        }
    });
    const { register, control, handleSubmit, formState } = form;
    // const { name, ref, onChange, onBlur} = register("username");
    const { errors } = formState;

    const { fields, append, remove } = useFieldArray({
        name: 'skills',
        control,
    });

    const onSubmit = (data) => {
        console.log("NitinConsole", data);
    }

    renderCount++;

  return (
    <>
    <h1>User Form ({renderCount/2})</h1>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <label htmlFor='username'>User Name</label>
            <input type='text' id='username' {...register("username", {
                required: 'User Name is Required'
            })}/>
            {/* <input type='text' id='username' name={name} ref={ref} onChange={onChange} onBlur={onBlur} /> */}
            <p style={{color: 'red'}}>{errors.username?.message}</p>

            <label htmlFor='email'>Email</label>
            <input type='email' id='email' {...register("email", {
                pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Incorrect Email formate',
                },
                validate: {
                    notAdmin: (value) => {
                        return (
                            value !== 'admin@example.com' || 'Enter Different Email'
                        )
                    },
                    onBlackListed: (value) => {
                        return (
                            !value.endsWith("baddomain.com") || 'This domain is not supported'
                        )
                    }
                }
            })} />
            <p style={{color: 'red'}}>{errors.email?.message}</p>

            <label htmlFor='channel'>Channel</label>
            <input type='text' id='channel' {...register("channel", {
                required: 'Channel Name is Required'
            })} />
            <p style={{color: 'red'}}>{errors.channel?.message}</p>

            <label htmlFor='twitter'>Twitter</label>
            <input type='text' id='twitter' {...register("social.twitter", {
                required: 'Twitter is Required'
            })} />
            <p style={{color: 'red'}}>{errors.social?.twitter?.message}</p>

            <label htmlFor='facebook'>Facebook</label>
            <input type='text' id='facebook' {...register("social.facebook", {
                required: 'Facebook is Required'
            })} />
            <p style={{color: 'red'}}>{errors.social?.facebook?.message}</p>

            <label htmlFor='primay-phone'>Primay Phone Number</label>
            <input type='text' id='phoneNumbers' {...register("phoneNumbers.0", {
                required: 'Primay Phone Number Required',
                pattern: {
                    value: /^\+?[1-9]\d{1,14}$/,
                    message: "Invalid Phone Number"
                }
            })} />
            <p style={{color: 'red'}}>{errors?.phoneNumbers?.[0]?.message}</p>

            <label htmlFor='secondary-phone'>Secondary Phone Number</label>
            <input type='text' id='phoneNumbers' {...register("phoneNumbers.1", {
                pattern: {
                    value: /^\+?[1-9]\d{1,14}$/,
                    message: "Invalid Phone Number"
                }
            })} />
            <p/>

            <div>
                <h3>List of Skills</h3>
                <div>
                {
                    fields?.map((skill, index) => {
                        return (
                        <>
                            <input key={skill.id} type='text' {...register(`skills.${index}.language`)}/>
                            {index > 0 ? <button type='button' onClick={() => remove(index)}>Remove</button> : null}
                            <p/>
                        </>
                        )
                    })
                }
                <button type='button' onClick={() => append({"language": ""})}>Add Skills</button>
                </div>
            </div>

            <button>Submit</button>
        </form>
        <DevTool control={control}/>
    </>
  )
}

export default YouTubeForm