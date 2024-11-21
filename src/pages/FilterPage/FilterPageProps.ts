import { Filter } from '@/types/Filter';

export interface FilterPageProps {
  defaultValues: Filter;
  onSearch: (filterData: Filter) => void;
}
