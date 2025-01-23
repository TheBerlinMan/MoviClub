'use client';

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { useState } from "react"
import { TMDBMovie, searchMovies } from "@/app/api/tmdb/tmdb"

export function SearchDialog() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<TMDBMovie[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    try {
      const data = await searchMovies(query);
      setResults(data.results);
    } catch (error) {
      console.error('Search failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="hover:cursor-pointer">
          <span>Search</span>
        </div>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Search /> Search
          </DialogTitle>
          <DialogDescription>
            Search for a movie or tv show.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSearch}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Input
                id="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search movies..."
                className="col-span-3"
              />
            </div>
            {results.length > 0 && (
              <div className="max-h-[300px] overflow-y-auto">
                {results.map((movie) => (
                  <div key={movie.id} className="p-2 hover:bg-gray-100 rounded">
                    <h3 className="font-semibold">{movie.title}</h3>
                    <p className="text-sm text-gray-500">
                      {movie.release_date?.split('-')[0]}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
          <DialogFooter>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Searching...' : 'Search'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
