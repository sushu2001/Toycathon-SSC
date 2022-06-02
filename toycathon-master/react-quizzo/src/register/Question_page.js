import React from 'react'

function Question_page() {
  return (
    <>
    <section>
        <div className='Que_no' >
            <h3 name="Que_no_block">Question No</h3>
        </div>
    </section>
    <section>
        <div className='que'>
            <div>
               
        <div className='que-n'>
            <h2>Question no</h2>
        </div>
        <div className='max'>
            Max points:
        </div>
            </div>
        <br />
        <div>
            <h3>Question...</h3>
        </div>
        <input type="text" placeholder='Enter your text here'/>
        <button type="submit">Mapping</button>
        <button type="submit">Hint</button>
        
        </div>

    </section>
    <section>
        <div>
            IMG
        </div>
    </section>
    <section>

    <button type="submit">Next</button>
    <button type="submit">Clear</button>
    </section>
    <button type="submit" >End Quiz</button>
    </>
  )
}

export default Question_page