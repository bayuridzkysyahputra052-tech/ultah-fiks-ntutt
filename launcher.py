#!/usr/bin/env python3
"""
Birthday Project Launcher
------------------------
Buka halaman ulang tahun di browser otomatis

Cara pakai:
    python launcher.py
"""

import webbrowser
import os
import sys

# Konfigurasi
FILE_PATH = "index.html"

def open_page():
    """Buka halaman di browser"""
    current_dir = os.path.dirname(os.path.abspath(__file__))
    file_url = os.path.join(current_dir, FILE_PATH)
    file_url = "file:///" + file_url.replace("\\", "/")
    
    print("🎂 Membuka halaman ulang tahun...")
    print(f"📂 Lokasi: {file_url}")
    print("\n✨ Selamat ulang tahun! 🎉\n")
    
    webbrowser.open(file_url)

def show_instructions():
    """Tampilkan panduan cara mengganti konten"""
    print("""
========================================
   PANDUAN GANTI KONTEN
========================================

📝 CARA EDIT:

1. Buka file index.html dengan text editor
   (VS Code, Notepad++, Notepad, dll)

2. Cari komentar <!-- GANTI ... DI SINI -->
   untuk menemukan bagian yang perlu diedit

3. Ganti:
   - Teks ucapan
   - Nama
   - Tanggal
   - Nama file foto/video di folder assets/

📁 FILE DI assets/:

- foto1.jpg         → Foto halaman 1
- foto3-1.jpg s/d foto3-6  → 6 foto halaman 3
- bersama1.jpg s/d bersama6 → 6 foto halaman 4
- video1.mp4, video2.mp4   → 2 video halaman 5

========================================
    """)

def main():
    print("""
╔══════════════════════════════════════╗
║      🎂 BIRTHDAY PROJECT 🎂         ║
║      Launcher version 1.0            ║
╚══════════════════════════════════════╝
    """)
    
    print("Pilih opsi:")
    print("1. Buka halaman ulang tahun")
    print("2. Lihat panduan ganti konten")
    print("3. Semua")
    
    choice = input("\nMasukkan pilihan (1/2/3): ").strip()
    
    if choice in ['1', '3']:
        open_page()
    
    if choice in ['2', '3']:
        show_instructions()
    
    if choice not in ['1', '2', '3']:
        print("Pilihan tidak valid!")
        return

if __name__ == "__main__":
    main()