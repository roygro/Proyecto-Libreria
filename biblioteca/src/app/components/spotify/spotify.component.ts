import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.css']
})
export class SpotifyComponent implements OnInit {
  accessToken: string | null = null;
  playlists: any[] = [];
  selectedPlaylistUrl: SafeResourceUrl | null = null;
  searchQuery: string = ''; // Variable para la búsqueda

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    const token = params.get('access_token');

    if (token) {
      this.accessToken = token;
      this.searchAudiobookPlaylists(); // Buscar audiolibros al iniciar
    }
  }

  login(): void {
    const clientId = 'f43212886053448f91cdf3e7471686d7';
    const redirectUri = 'http://localhost:4200/spotify';
    const scope = 'playlist-read-private';
    const authUrl = `https://accounts.spotify.com/authorize?response_type=token&client_id=${clientId}&scope=${scope}&redirect_uri=${encodeURIComponent(redirectUri)}`;

    window.location.href = authUrl;
  }

  searchAudiobookPlaylists(query: string = 'audiobooks'): void {
    if (!this.accessToken) return;

    const url = `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=playlist&limit=20`;
    const headers = { Authorization: `Bearer ${this.accessToken}` };

    this.http.get(url, { headers }).subscribe(
      (data: any) => {
        this.playlists = data.playlists.items;
      },
      (error) => {
        console.error('Error al buscar playlists:', error);
      }
    );
  }

  selectPlaylist(playlistId: string): void {
    const playlistUrl = `https://open.spotify.com/embed/playlist/${playlistId}`;
    this.selectedPlaylistUrl = this.sanitizer.bypassSecurityTrustResourceUrl(playlistUrl);
    console.log(`Playlist seleccionada: ${playlistUrl}`);
  }

  search(): void {
    this.searchAudiobookPlaylists(this.searchQuery || 'audiobooks');
  }
}
