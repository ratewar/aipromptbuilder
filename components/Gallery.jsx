const Gallery = () => {
  return (

<section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      <span className='orange_gradient text-center'> AI Prompts Generated Images</span>
    </h1>
   

    <div className='mt-16 prompt_layout'>

    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="/assets/images/image3.jpeg" alt="" />
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="/assets/images/image2.jpeg" alt="" />
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="/assets/images/image1.jpeg" alt="" />
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="/assets/images/image4.jpeg" alt="" />
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="/assets/images/image5.jpeg" alt="" />
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="/assets/images/image6.jpeg" alt=""/>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="/assets/images/image7.jpeg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="/assets/images/image8.jpeg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="/assets/images/image9.jpeg" alt=""/>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="/assets/images/image10.jpeg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="/assets/images/image11.jpeg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="/assets/images/image12.jpeg" alt=""/>
        </div>
    </div>
</div>
  </section>


   

  )
}

export default Gallery