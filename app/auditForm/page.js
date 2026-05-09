"use client"
import React from 'react'
import { useForm } from 'react-hook-form';
import AuditForm2 from '@/components/auditform';

const AuditForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const APIchoice = watch("AI"); // updates immediately when select changes

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className='w-4/5 my-24  bg-white shadow-md  px-8 py-12 rounded-2xl '>
     <h2 className="text-xl font-bold mb-2 text-center">AI Spend Audit Form</h2>
      <p className="text-gray-600 mb-4 text-center">Select your AI tool and enter usage details.</p>
      <hr className=' '/>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center gap-12 my-10 '>
        <label htmlFor="AI" className='grid gap-3 text-2xl'>1. Choose Your AI tool
        <select  className='max-w-2xl bg-black/5  px-3 py-2 text-sm' {...register("AI", { required: "Please select a category" })}>
          <option value="">Select AI tool</option>
          <option value="github-copilot">Github Copilot</option>
          <option value="cursor">Cursor</option>
          <option value="claude">Claude</option>
          <option value="chatgpt">ChatGPT</option>
          <option value="anthropic-api-direct">Anthropic API direct</option>
          <option value="openai-api-direct">OpenAI API direct</option>
          <option value="gemini">Gemini</option>
          <option value="gemini-api">Gemini API</option>
          <option value="windsurf">Windsurf</option>
        </select>
</label>
        {/* Render child form immediately when a value is selected */}
        
        {APIchoice && <AuditForm2 ai={APIchoice} register={register} />}

        <button type="submit" className='bg-blue-400 px-3.5 py-2 rounded-lg mx-auto'>Submit</button>
      </form>
    </div>
  )
}

export default AuditForm;
