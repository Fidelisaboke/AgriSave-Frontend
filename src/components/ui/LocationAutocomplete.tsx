import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Loader2 } from 'lucide-react';
import type { ControllerRenderProps, FieldValues, Path } from 'react-hook-form';

interface LocationResult {
  place_id: number;
  display_name: string;
}

interface LocationAutocompleteProps<TFieldValues extends FieldValues, TName extends Path<TFieldValues>> {
  field: ControllerRenderProps<TFieldValues, TName>;
}

export function LocationAutocomplete<TFieldValues extends FieldValues, TName extends Path<TFieldValues>>(
  { field }: LocationAutocompleteProps<TFieldValues, TName>
) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<LocationResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const timer = setTimeout(() => {
      if (query.length > 2) {
        setIsLoading(true);
        fetch(
          `https://nominatim.openstreetmap.org/search?q=${query}&format=json&addressdetails=1&limit=5&countrycodes=ke`,
          { signal }
        )
          .then((res) => res.json())
          .then((data) => {
            setResults(data);
            setIsLoading(false);
            setShowResults(true);
          })
          .catch((err) => {
            if (err.name !== 'AbortError') {
              console.error('Nominatim fetch error:', err);
              setIsLoading(false);
            }
          });
      } else {
        setResults([]);
        setShowResults(false);
      }
    }, 200);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [query]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    field.onChange(e.target.value);
  };
  
  const handleSelectResult = (result: LocationResult) => {
    field.onChange(result.display_name);
    setQuery(result.display_name);
    setShowResults(false);
  };

  return (
    <div className="relative">
      <Input
        placeholder="e.g., Nakuru, Kenya"
        className="border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500"
        {...field}
        onChange={handleInputChange}
        value={query || field.value}
        onFocus={() => query.length > 2 && setShowResults(true)}
        autoComplete="off"
      />
      {showResults && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-slate-200 rounded-md shadow-lg">
          {isLoading ? (
            <div className="flex items-center gap-2 p-3 text-sm text-slate-500">
              <Loader2 className="w-4 h-4 animate-spin" />
              Searching...
            </div>
          ) : results.length > 0 ? (
            <ul>
              {results.map((result) => (
                <li
                  key={result.place_id}
                  className="px-3 py-2 text-sm cursor-pointer hover:bg-slate-100"
                  onMouseDown={(e) => {
                    e.preventDefault();
                    handleSelectResult(result);
                  }}
                >
                  {result.display_name}
                </li>
              ))}
            </ul>
          ) : (
            <p className="p-3 text-sm text-slate-500">No results found.</p>
          )}
        </div>
      )}
    </div>
  );
}