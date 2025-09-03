
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
    <div className='mt-10 -mx-[16px]'>
      <div className='flex items-center px-5 py-8 bg-primary-100'>
        <h3 className="font-semibold text-gray-900 text-14">
          이번주 장독 막기
        </h3>
      </div>
      <section className='px-24 py-12 bg-white'>
        <div className=''>
          <p className='mb-12 text-gray-500 text-12'>이번주 막은 장독은 N개에요</p>
        </div>
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
