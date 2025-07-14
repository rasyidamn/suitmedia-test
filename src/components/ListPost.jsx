import Card from "./Card";

function ListPost({
  postData,
  currentPost,
  currentPage,
  setPostPerPage,
  lastPostIndex,
  firstPostIndex,
}) {
  return (
    <main className="py-10 mx-32">
      <div className="flex justify-between">
        <div>
          <p>
            Showing {firstPostIndex + 1} - {lastPostIndex} of {postData.length}
          </p>
        </div>
        <div className="flex gap-4">
          <div>
            <label htmlFor="showPerPage">show per page </label>
            <select
              name="showPerPage"
              id="showPerPage"
              className="w-20 px-4 border rounded-xl"
              onChange={(e) => setPostPerPage(e.target.value)}
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
          </div>
          <div>
            <label htmlFor="sortBy">sort by </label>
            <select
              name="sortBy"
              id="sortBy"
              className="w-20 px-4 border rounded-xl"
              onChange={(e)=>setSearchParams({sort: e.target.value})}
            >
              <option value="-published_at">newest</option>
              <option value="published_at">oldest</option>
            </select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6 mt-10">
        {currentPost.map((post) => {
          return (
            <Card
              title={post.title}
              date={post.published_at}
              id={post.id}
              key={post.id}
            />
          );
        })}
      </div>
    </main>
  );
}

export default ListPost;
