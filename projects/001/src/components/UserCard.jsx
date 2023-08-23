import '../css/UserCard.css';

export function UserCard ({ user }) {
  return (
    <div className='card'>
      <section className='user'>
        <h3 className='user__name'>
          {user.firstName} {user.lastName}
        </h3>
        <p className='user__username'>@{user.username}</p>
        <img
          src={`${user.image}`}
          className='user__img'
          alt={`image for user: ${user.username}`}
        />
      </section>

      <section className='posts'>
        <h1 className='posts__header'>Posts:</h1>
        {user.posts !== undefined && user.posts.length > 0
          ? (
              user.posts.map((post) => (
                <article className='post' key={post.id}>
                  <h1 className='post__title'>{post.title}</h1>
                  <p className='post__content'>{post.body}</p>
                </article>
              ))
            )
          : (
            <article>
              <h1>No posts</h1>
            </article>
            )}
      </section>
    </div>
  );
}
