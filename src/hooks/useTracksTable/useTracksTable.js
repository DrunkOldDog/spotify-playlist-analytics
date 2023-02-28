import { useMemo } from "react";
import { useTable, useSortBy } from "react-table";
import { TrackCell } from "@components/TracksTable";
import { PopularityCell } from "@components/TracksTable/PopularityCell";

export const useTracksTable = (tracks) => {
  const data = useMemo(
    () =>
      tracks.map(({ track }, tracksIndex) => ({
        ...track,
        index: tracksIndex + 1,
      })),
    [tracks]
  );

  const columns = useMemo(
    () => [
      {
        Header: "#",
        accessor: "index",
        isNumeric: true,
      },
      {
        Header: "Title",
        accessor: "name",
        Cell: TrackCell,
      },
      {
        Header: "Album",
        accessor: "album.name",
      },
      {
        Header: "Popularity",
        accessor: "popularity",
        isNumeric: true,
        Cell: PopularityCell,
      },
      {
        Header: "Release Date",
        accessor: "album.release_date",
      },
    ],
    []
  );

  return useTable({ columns, data, autoResetSortBy: false }, useSortBy);
};
