export default function ReviewLastPage() {
  const reviewInput = window.sessionStorage.getItem('review-input');
  const userInfo = window.sessionStorage.getItem('user-info');
  const category = window.sessionStorage.getItem('category');
  return (
    <div>
      <div style={{ width: '200px', height: '200px' }}>

        {Object.values(userInfo).map((v) => (
          <span key={v}>{v}</span>
        ))}
      </div>
      <div style={{ width: '200px', height: '200px' }}>
        {category}
      </div>
      <div style={{ width: '200px', height: '200px' }}>

        {Object.values(reviewInput).map((v) => (
          <span key={v}>{v}</span>
        ))}
      </div>
    </div>
  );
}
