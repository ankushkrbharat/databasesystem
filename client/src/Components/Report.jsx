import React from 'react'
import Header from '../Header'

const Report = () => {
  return (
    <div className="flex flex-col"><Header/>
    
<div class="w-[800px] h-[650px] p-[20px] text-center border-8 border-primary items-center mt-6">
<div class="w-[750px] h-[600px] p-[20px] text-center border-4 border-dotted border-primary items-center">
       <span class="text-[50px] text-primary font-bold">Certificate of Completion</span>
       <br/><br/>
       <span class="text-[25px]"><i>This is to certify that</i></span>
       <br/><br/>
       <span class="text-[30px] text-green-600"><b>Daniel Vitorrie</b></span><br/><br/>
       <span class="text-[30px]"><i>has successfully completed the certification</i></span> <br/><br/>
       <span class="text-[30px]">Java Developer</span> <br/><br/>
       <span class="text-[20px]">with score of <b>A+</b></span> <br/><br/><br/><br/>
       <span class="text-[25px]"><i>dated</i></span><br/>
      
      <span class="text-[30px]">2023</span>

</div>
</div>
    </div>
  )
}

export default Report