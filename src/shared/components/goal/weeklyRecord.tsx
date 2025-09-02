
function weeklyRecord(){
  const days = ['월', '화', '수', '목', '금', '토', '일'] as const;
  const weekly:Record<string, boolean> = {
    mon: true,   
    tue: false, 
    wed: true,   
    thu: false, 
    fri: false, 
    sat: false, 
    sun: false  
  };
  const recordKeys = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  return (
    <div className='mt-10 -mx-6'>
      <div className='bg-primary-100 flex items-center rounded-t-12 h-[48px] px-5'>
        <h3 className="font-semibold text-gray-900 text-20">
          이번 주 달성 기록
        </h3>
      </div>
      <section className='px-6 py-3 bg-gray-100'>
      <div className="flex justify-between">
        {days.map((day, index) => {
          const isCompleted = weekly[recordKeys[index]];
          
          return (
            <div key={day} className="flex flex-col items-center">
              <span className="mb-2 text-sm text-gray-600">{day}</span>
              {isCompleted ? 'o' : 'X'}
            </div>
          );
        })}
      </div>
      </section>
    </div>
  )
}

export default weeklyRecord;
