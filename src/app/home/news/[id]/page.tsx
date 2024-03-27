type Params = {
  params: {
    id: string;
  };
};

export default function page({ params }: Params) {
  return (
    <div>
      <p>news: {params.id}</p>
    </div>
  );
}
