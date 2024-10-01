const VideoModule = (function() {
    const setVideoSrc = function(url, id) {
        const iframe = document.getElementById(id);
        if (iframe) {
            iframe.setAttribute('src', url);
        }
    };
    return {
        playVideo: function(url, id) {
            setVideoSrc(url, id);
        }
    };
})();

class Multimedia {
    constructor(url) {
        let _url = url; 
        this.getUrl = () => _url; 
    }

    setInicio() {
        return "Este método es para realizar un cambio en la URL del video";
    }
}

class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url); 
        this.id = id; 
    }

    playMultimedia() {
        VideoModule.playVideo(this.getUrl(), this.id);
    }

    setInicio(tiempo) {
        const urlConTiempo = `${this.getUrl()}?start=${tiempo}`; 
        document.getElementById(this.id).setAttribute('src', urlConTiempo);
    }
}

const musica = new Reproductor('https://www.youtube.com/embed/GShxN7ONPmI?start_radio=1', 'musica');
const pelicula = new Reproductor('https://www.youtube.com/embed/F478PvRt74Y', 'pelicula');
const serie = new Reproductor('https://www.youtube.com/embed/X-mKRbAeAd0', 'serie');

musica.playMultimedia();
pelicula.playMultimedia();
serie.playMultimedia();
musica.setInicio(60); 