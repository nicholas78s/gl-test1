import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { IContactCard } from "../models/ContactCard";
import { useAppSelector } from "../redux/hooks";
import { selectSearch } from "../redux/searchSlice";

export default function useApi(url: string, initialData: IContactCard[] | IContactCard): [unknown, Dispatch<SetStateAction<IContactCard[] | IContactCard>>, boolean, boolean] {
  const [data, setData] = useState(initialData);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { searchTerm } = useAppSelector(selectSearch);

  useEffect(() => {
    setLoading(true);
    const filter = (searchTerm) ? '?term=' + searchTerm: '';
    fetch(url + filter)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url, searchTerm]);

  return [data, setData, isLoading, error];
}
