import { gql, useQuery, NetworkStatus } from '@apollo/client';

import ErrorMessage from '@/components/ErrorMessage';

export const LIST_PLACE_QUERY = gql`
  query listPlace($page: Int) {
    listPlace(page: $page) {
      edges {
        _id
        owner {
          name
          email
        }
        desciption
        priceByNight
        reviews {
          author {
            name
            email
          }
          rate
          feedback
          _id
        }
      }
      pagination {
        page
        pages
        count
      }
    }
  }
`;

export const listPlaceQueryVars = {
  page: 1,
};

export default function PlaceList() {
  const { loading, error, data, fetchMore, networkStatus } = useQuery(LIST_PLACE_QUERY, {
    variables: listPlaceQueryVars,
    // Setting this value to true will make the component rerender when
    // the "networkStatus" changes, so we are able to know if it is fetching
    // more data
    notifyOnNetworkStatusChange: true,
  });

  const loadingMorePlaces = networkStatus === NetworkStatus.fetchMore;

  if (error) return <ErrorMessage message="Error loading places." />;
  if (loading && !loadingMorePlaces) return <div>Loading</div>;

  console.log('🚀 ~ file: PlaceList.tsx ~ line 53 ~ PlaceList ~ data', data);

  const { listPlace } = data;

  const loadMorePlaces = () => {
    fetchMore({
      variables: {
        page: listPlace?.pagination.page + 1,
      },
    });
  };
  const areMorePlaces = listPlace?.pagination.page < listPlace?.pagination.pages;

  return (
    <section>
      <ul>
        {listPlace?.edges.map((place: any, index: number) => (
          <li key={place._id}>
            <div>
              <span>{index + 1}. </span>
              <div>{place.owner.name}</div>
              <div>{place.priceByNight}</div>
            </div>
          </li>
        ))}
      </ul>
      {areMorePlaces && (
        <button onClick={() => loadMorePlaces()} disabled={loadingMorePlaces}>
          {loadingMorePlaces ? 'Loading...' : 'Show More'}
        </button>
      )}
    </section>
  );
}
