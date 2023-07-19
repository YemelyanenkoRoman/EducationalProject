'use client';
import { Breadcrumbs, breadcrumbItems } from '@/components/Breadcrumbs';
import { DirectionsContent } from '@/components/directions/DirectionsContent';

const Directions = ({ params }: { params: { directions: string } }) => {
  console.log(params.directions);

  const data = DirectionsContent.find((item) => item.id === params.directions);

  return (
    <>
      <div className="mt-[300px]">
        <div>
          <Breadcrumbs items={breadcrumbItems} />
        </div>
        {data ? (
          <div>
            <h1>User: {data.name}</h1>
            <p>ID: {data.id}</p>
          </div>
        ) : (
          <div>User not found</div>
        )}
      </div>
    </>
  );
};

export default Directions;
