export default function SearchChallenges() {
  return (
    <div className="flex flex-row items-center gap-4 m-4">
      <input
        type="search"
        placeholder="검색할 챌린지를 입력해주세요."
        className="rounded-full w-full border border-orange p-4"
      />
      <button className="bg-green w-[120px] p-4 text-white text-[20px] font-semibold rounded-[16px]">
        조회
      </button>
    </div>
  )
}
