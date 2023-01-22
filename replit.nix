{ pkgs }: {
    deps = [
        pkgs.fetchutils
        pkgs.yarn
        pkgs.ffmpeg.bin
        pkgs.nodejs-16_x
        pkgs.nodePackages.typescript
      	pkgs.ffmpeg
      	pkgs.imagemagick
	      pkgs.git
        pkgs.cowsay
    ];
}