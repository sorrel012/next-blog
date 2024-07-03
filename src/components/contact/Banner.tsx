export interface BannerData {
  message: string;
  state: 'success' | 'error';
}

export default function Banner({
  banner: { message, state },
}: {
  banner: BannerData;
}) {
  const isSuccess = state === 'success';
  const icon = isSuccess ? '✔' : '🔥';
  return (
    <p
      className={`px-2 py-1 ${isSuccess ? 'bg-green-300 text-green-800' : 'bg-red-300 text-red-300'} w-full max-w-md rounded-md`}
    >{`${icon} ${message}`}</p>
  );
}
