import React from 'react'

export default function AuditForm2({ ai, register }) {
  return (
    <div className=' grid gap-6 '>
      {ai === "openai-api-direct" && (
        <>
         <label htmlFor="AI" className='grid gap-3 text-2xl'>2. Enter Usage Detail
        <select  className='max-w-2xl bg-black/5  px-3 py-2 text-sm' {...register("gpt-type",{required:true })}>
            <option value="">--Select Your Plan--</option>
            <option value="GPT‑5.5-standard">GPT‑5.5(standard)</option>
          <option value="GPT‑5.5(Batch -50%">GPT‑5.5(Batch -50%)</option>
          <option value="GPT‑5.5(Data residency+10%)">GPT‑5.5(Data residency+10%)</option>
          <option value="GPT‑5.4(standard)">GPT‑5.4(standard)</option>
          <option value="GPT‑5.4(Batch -50%)">GPT‑5.4(Batch -50%)</option>
          <option value="GPT‑5.4(Data residency+10%)">GPT‑5.4(Data residency+10%)</option>
          <option value="GPT‑5.4 mini(standard)">GPT‑5.4 mini(standard)</option>
          <option value="GPT‑5.4 mini(Batch -50%)">GPT‑5.4 mini(Batch -50%)</option>
          <option value="GPT‑5.4 mini(Data residency+10%)">GPT‑5.4 mini(Data residency+10%)</option>
          <option value="GPT‑Realtime‑2 (Text)">GPT‑Realtime‑2 (Text)</option>
          <option value="GPT‑Realtime‑2 (Audio)">GPT‑Realtime‑2 (Audio)</option>
          <option value="GPT‑Realtime‑2 (Image)">GPT‑Realtime‑2 (Image)</option>
          <option value="GPT‑Image‑2(Image)">GPT‑Image‑2(Image)</option>
          <option value="GPT‑Image‑2(Text)">GPT‑Image‑2(Text)</option>

          </select>
          </label>
        </>
      )}

      {ai === "github-copilot" && (
        <>
        <label htmlFor="AI" className='grid gap-3 text-2xl'>2. Enter Usage Detail
        <select  className='max-w-2xl bg-black/5  px-3 py-2 text-sm' {...register("copilot-type",{required:true })} >
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
        <select  className='max-w-2xl bg-black/5  px-3 py-2 text-sm' {...register("gemini-type",{required:true })}>
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
        <select  className='max-w-2xl bg-black/5  px-3 py-2 text-sm' {...register("gemini-api-type",{required:true })}>
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
        <select  className='max-w-2xl bg-black/5  px-3 py-2 text-sm'{...register("cursor-type",{required:true })}>
            <option value="">--Select Your Plan--</option>
            <option value="hobby">Hobby</option>
          <option value="business">Business</option>
          <option value="pro">Pro</option> 
          <option value="plus">Pro+</option>
          <option value="ultra">Ultra</option> 
          <option value="enterprise">Enterprise</option> 
          </select>
          </label>
        </>
      )}
      {ai === "claude" && (
        <>
          <label htmlFor="AI" className='grid gap-3 text-2xl'>2. Enter Usage Detail
        <select  className='max-w-2xl bg-black/5  px-3 py-2 text-sm' {...register("claude-type",{required:true })}>
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
        <select className='max-w-2xl bg-black/5  px-3 py-2 text-sm'  {...register("chatgpt-type",{required:true })}>
            <option value="">--Select Your Plan--</option>
            <option value="free">Free</option>
          <option value="plus">Plus</option>
          <option value="pro">Pro</option> 
          <option value="go">Go</option>
          <option value="enterprise">Enterprise</option> 
          </select>
          </label>
        </>
      )}
      {ai === "anthropic-api-direct" && (
        <>
          <label htmlFor="AI" className='grid gap-3 text-2xl'>2. Enter Usage Detail
        <select  className='max-w-2xl bg-black/5  px-3 py-2 text-sm' {...register("anthropic-api-type",{required:true })}>
            <option value="">--Select Your Plan--</option>
            <option value="claude-opus-4.7">Claude Opus 4.7</option>
          <option value="claude-sonnet-4.6">Claude Sonnet 4.6</option>
          <option value="claude-haiku-4.5">Claude Haiku 4.5</option>  
          </select>
          </label>
        </>
        
      )}
      {ai === "windsurf" && (
        <>
          <label htmlFor="AI" className='grid gap-3 text-2xl'>2. Enter Usage Detail
        <select  className='max-w-2xl bg-black/5  px-3 py-2 text-sm' {...register("windsurf-type",{required:true })}>
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
    
      {(ai.includes("openai") ||
        ai.includes("anthropic") ||
        ai.includes("gemini") ||
        ai.includes("chatgpt") ||
        ai.includes("claude") && ai.includes("api")) && (
        <>
          <label className="block font-medium">Tokens (per month)</label>
          <input
            type="number"
            placeholder="Enter number of tokens"
            {...register("tokens", { required: true })}
            className='max-w-2xl bg-black/5  px-3 py-2 text-sm'
          />
          </>
          )}

           {(ai.includes("copilot") ||
        ai.includes("cursor") ||
        ai.includes("windsurf") ||
        ai.includes("claude") && ai.includes("team") ||
        ai.includes("chatgpt") && ai.includes("business")) && (
        <>
          <label className="block font-medium">Seats</label>
          <input
            type="number"
            placeholder="Enter number of seats"
            {...register("seats", { required: true })}
            className='max-w-2xl bg-black/5  px-3 py-2 text-sm'
          />
          </>
        )}
         {(ai.includes("claude")) ||
        (ai.includes("chatgpt") && ai.includes("codex")) && (
        <>
          <label className="block font-medium">Seats</label>
          <input
            type="number"
            placeholder="Enter number of seats"
            {...register("seats", { required: true })}
            className='max-w-2xl bg-black/5  px-3 py-2 text-sm'
          />
          <label className="block font-medium">Tokens (per month)</label>
          <input
            type="number"
            placeholder="Enter number of tokens"
            {...register("tokens", { required: true })}
            className='max-w-2xl bg-black/5  px-3 py-2 text-sm'
          />
        </>
      )}
  <label className="block font-medium">Primary use case</label>
     <select {...register("primary-use-case",{required:true })} className='max-w-2xl bg-black/5 px-3 py-2 text-sm'>
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
            {...register("spend", { required: true })} className='max-w-2xl bg-black/5  px-3 py-2 text-sm'
          />
      </label>
    </div>
  );
}

