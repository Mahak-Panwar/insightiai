import React from 'react'

export default function AuditForm2({ ai, register }) {
  return (
    <div className=' grid gap-6 '>
      {ai === "openai-api-direct" && (
        <>
         <label htmlFor="AI" className='grid gap-3 text-2xl'>2. Enter Usage Detail
        <select  className='max-w-2xl bg-black/5 w-11/12 px-3 py-2 text-sm' {...register("plan",{required:true })}>
            <option value="">--Select Your Plan--</option>
            <option value="gpt-5.5-standard">GPT‑5.5(standard)</option>
          <option value="gpt-5.5-batch">GPT‑5.5(Batch -50%)</option>
          <option value="gpt-5.5-residence">GPT‑5.5(Data residency+10%)</option>
          <option value="gpt-5.4-standard">GPT‑5.4(standard)</option>
          <option value="gpt-5.4-batch">GPT‑5.4(Batch -50%)</option>
          <option value="gpt-5.4-residence">GPT‑5.4(Data residency+10%)</option>
          <option value="gpt-5.4-mini-standard">GPT‑5.4 mini(standard)</option>
          <option value="gpt-5.4-mini-batch">GPT‑5.4 mini(Batch -50%)</option>
          <option value="gpt-5.4-mini-residence">GPT‑5.4 mini(Data residency+10%)</option>
          <option value="gpt-realtime-2-text">GPT‑Realtime‑2 (Text)</option>
          <option value="gpt-realtime-2-audio">GPT‑Realtime‑2 (Audio)</option>
          <option value="gpt-realtime-2-image">GPT‑Realtime‑2 (Image)</option>
          <option value="gpt-image-2-image">GPT‑Image‑2(Image)</option>
          <option value="gpt-image-2-text">GPT‑Image‑2(Text)</option>

          </select>
          </label>
        </>
      )}

      {ai === "github-copilot" && (
        <>
        <label htmlFor="AI" className='grid gap-3 text-2xl'>2. Enter Usage Detail
        <select  className='max-w-2xl bg-black/5 w-11/12 px-3 py-2 text-sm' {...register("plan",{required:true })} >
            <option value="">--Select Your Plan--</option>
            <option value="basic">Basic</option>
          <option value="team">Team</option>
          <option value="enterprise">Enterprise</option> 
          </select>
          </label>
        </>
      )}

      {ai === "gemini" && (
        <>
          <label htmlFor="AI" className='grid gap-3 text-2xl'>2. Enter Usage Detail
        <select  className='max-w-2xl bg-black/5 w-11/12 px-3 py-2 text-sm' {...register("plan",{required:true })}>
            <option value="">--Select Your Plan--</option>
            <option value="free">Free</option>
          <option value="plus">Plus</option>
          <option value="pro">Pro</option> 
          <option value="plus">Plus</option>
          <option value="ultra">Ultra</option> 
          </select>
          </label>
        </>
      )}
      {ai === "gemini-api" && (
        <>
         <label htmlFor="AI" className='grid gap-3 text-2xl'>2. Enter Usage Detail
        <select  className='max-w-2xl bg-black/5 w-11/12 px-3 py-2 text-sm' {...register("plan",{required:true })}>
            <option value="">--Select Your Plan--</option>
            <option value="standard">Standard</option>
          <option value="batch">Batch</option>
          <option value="flex">Flex</option> 
          <option value="priority">Priority</option>
          </select>
          </label>
        </>
      )}
      {ai === "cursor" && (
        <>
         <label htmlFor="AI" className='grid gap-3 text-2xl'>2. Enter Usage Detail
        <select  className='max-w-2xl bg-black/5 w-11/12 px-3 py-2 text-sm'{...register("plan",{required:true })}>
            <option value="">--Select Your Plan--</option>
            <option value="hobby">Hobby</option>
          <option value="business">Business</option>
          <option value="pro">Pro</option> 
          <option value="pro+">Pro+</option>
          <option value="ultra">Ultra</option> 
          <option value="enterprise">Enterprise</option> 
          </select>
          </label>
        </>
      )}
      {ai === "claude" && (
        <>
          <label htmlFor="AI" className='grid gap-3 text-2xl'>2. Enter Usage Detail
        <select  className='max-w-2xl bg-black/5 w-11/12 px-3 py-2 text-sm' {...register("plan",{required:true })}>
            <option value="">--Select Your Plan--</option>
            <option value="free">Free</option>
          <option value="max">Max</option>
          <option value="pro">Pro</option> 
          <option value="team-standard">Team(5 to 150)Standard</option>
          <option value="team-premium">Team(5 to 150)Premium</option> 
          <option value="enterprise">Enterprise</option> 
          </select>
          </label>
        </>
      )}
      {ai === "chatgpt" && (
        <>
         <label htmlFor="AI" className='grid gap-3 text-2xl'>2. Enter Usage Detail
        <select className='max-w-2xl bg-black/5 w-11/12 px-3 py-2 text-sm'  {...register("plan",{required:true })}>
            <option value="">--Select Your Plan--</option>
            <option value="free">Free</option>
          <option value="plus">Plus</option>
          <option value="pro">Pro</option> 
          <option value="go">Go</option>
          <option value="enterprise">Enterprise</option> 
          <option value="enterprise">Enterprise</option> 
          <option value="business-codex">Business Codex</option> 
          <option value="business-chatgpt-codex">Business chatgpt codex</option> 
          </select>
          </label>
        </>
      )}
      {ai === "anthropic-api-direct" && (
        <>
          <label htmlFor="AI" className='grid gap-3 text-2xl'>2. Enter Usage Detail
        <select  className='max-w-2xl bg-black/5 w-11/12 px-3 py-2 text-sm' {...register("plan",{required:true })}>
            <option value="">--Select Your Plan--</option>
            <option value="opus-4.7">Opus 4.7</option>
          <option value="sonnet-4.6">Sonnet 4.6</option>
          <option value="haiku-4.5">Haiku 4.5</option>  
          </select>
          </label>
        </>
        
      )}
      {ai === "windsurf" && (
        <>
          <label htmlFor="AI" className='grid gap-3 text-2xl'>2. Enter Usage Detail
        <select  className='max-w-2xl bg-black/5 w-11/12 py-2 text-sm' {...register("plan",{required:true })}>
            <option value="">--Select Your Plan--</option>
            <option value="free">Free</option>
          <option value="max">Max</option>
          <option value="pro">Pro</option> 
          <option value="teams">Teams</option>
          <option value="enterprise">Enterprise</option> 
          </select>
          </label>
        </>
      )}

      {/* Default field for all */}
          <label className="block font-medium">Seats (if applicable)</label>
          <input
            type="number"
            placeholder="Enter number of seats"
            {...register("seats")}
            className='max-w-2xl  bg-black/5 w-11/12 px-3 py-2 text-sm'
          />
          <label className="block font-medium">Tokens (per month) if applicable</label>
          <input
            type="number"
            placeholder="Enter number of tokens"
            {...register("tokens")}
            className='max-w-2xl bg-black/5 w-11/12 px-3 py-2 text-sm'
          />


  <label className="block font-medium">Primary use case</label>
     <select {...register("primary_use_case",{required:true })} className='max-w-2xl bg-black/5 px-3 py-2 text-sm w-11/12'>
        <option value="" >--What You do the most with it--</option>
            <option value="coding">coding</option>
          <option value="writing">Writing</option>
          <option value="Data">Data</option>
          <option value="research">Research</option>  
          <option value="mixed">mixed</option>  
          </select>
            <label htmlFor="spend" className='grid gap-3 text-2xl'>3. Enter Your Monthly spend

          <input
            type="number"
            placeholder="Monthly Spend ($)"
            {...register("spend", { required: true })} className='max-w-2xl bg-black/5 w-11/12 px-3 py-2 text-sm'
          />
      </label>
    </div>
  );
}

