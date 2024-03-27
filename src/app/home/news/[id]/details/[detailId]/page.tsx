type Props = {
  params: {
    id: string;
    detailId: string;
  };
};

export default function page({ params }: Props) {
  return (
    <div>
      newsId : {params.id} detailId : {params.detailId}
    </div>
  );
}
