export async function load({ params }){
    const post = await import(`../${params.slug}.md`)
    const { title, date, categories, image, blog  } = post.metadata
    const content = post.default

    return {
      content,
      title,
      date,
      categories,
      image,
      blog,
    }
  }
 