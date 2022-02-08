async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('textarea[name="post-title"]').value;
    const post_content = document.querySelector('textarea[name="post-content"]').value;
    const image_content = document.querySelector('textarea[name="image-content"]').value;
    console.log(document.querySelector('textarea[name="image-content"]').value);
    const video_content = document.querySelector('textarea[name="video-content"]').value;
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        post_content,
        image_content,
        video_content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);