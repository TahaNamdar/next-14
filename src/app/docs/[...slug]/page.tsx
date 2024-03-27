type Props = {
  params: {
    slug: string[];
  };
};

export default function page({ params }: Props) {
  if (params.slug.length === 2) {
    return (
      <h1>
        features : {params.slug[0]} concept:{params.slug[1]}
      </h1>
    );
  } else if (params.slug.length === 1) {
    return <h1>feature: {params.slug[0]}</h1>;
  } else {
    return <h1>all : all segment</h1>;
  }

  return <div>Docs</div>;
}
