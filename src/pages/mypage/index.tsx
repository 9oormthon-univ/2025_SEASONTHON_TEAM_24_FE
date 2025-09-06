// src/pages/mypage/index.tsx (추후 생성시)
function MyPage() {
  function handleLogout() {
    if (confirm('정말 계정을 삭제하시겠습니까? (개발용)')) {
      axios.delete('/api/users')
        .then(() => {
          localStorage.clear();
          window.location.href = '/login';
        })
        .catch(err => console.error('삭제 실패:', err));
    }
  }

  return (
    <div>
      {/* 다른 마이페이지 컨텐츠 */}
      
      {/* 개발용 버튼 - 나중에 제거 예정 */}
      {process.env.NODE_ENV === 'development' && (
        <button 
          onClick={handleLogout}
          className="text-red-500 text-12"
        >
          [DEV] 계정 삭제
        </button>
      )}
    </div>
  );
}

export default MyPage;