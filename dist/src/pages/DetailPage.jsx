import { useEffect, useState, useRef } from 'react';
import video from '../assets/prewed-echidna360p.mp4';
import echidnaHeader from '../assets/echidna-header.webp';
import ReactPlayer from 'react-player/lazy';
import netflixLogo from '../assets/netflix.png';
import logo4k from '../assets/4k.webp';
import lovely from '../assets/lovely.webp';
import echidnaImage from '../assets/echidna.png';
import episode1 from '../assets/episode1.webp';
import episode2 from '../assets/episode2.webp';
import episode3 from '../assets/episode3.webp';
import episode4 from '../assets/episode4.webp';
import GuestIcon from '../assets/Guest.webp';
import axios from 'axios';
const { VITE_API_URL } = import.meta.env;
const DetailPage = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [comments, setComments] = useState([]);
  const fetchComment = async () => {
    try {
      setLoading(true);
      const getComment = await axios.get(`${VITE_API_URL}/wish`);
      setComments(getComment?.data?.data);
    } catch (error) {
      alert('error when fetch comment');
      setComments([]);
    } finally {
      setLoading(false);
    }
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsSubmitting(true);
      const insert = await axios.post(`${VITE_API_URL}/wish`, {
        name,
        message,
      });
      if (insert.data) {
        alert(insert.data.message);
      }
      fetchComment();
    } catch (error) {
      alert(error.response.data.message || 'error when input');
    } finally {
      setName('');
      setMessage('');
      setIsSubmitting(false);
    }
  };
  const scrollCommentRef = useRef(null);

  useEffect(() => {
    fetchComment();
  }, []);
  useEffect(() => {
    if (scrollCommentRef.current) {
      scrollCommentRef.current.scrollTop =
        scrollCommentRef.current.scrollHeight;
    }
  }, [comments]);

  return !loading ? (
    <div className='flex w-full bg-black text-white pb-4 cursor-not-allowed'>
      <div className='w-full max-w-md mx-auto flex flex-col relative flex-grow'>
        <div className='top-0 left-0 right-0'>
          <ReactPlayer
            url={video}
            loop={true}
            playing={true}
            width='100%'
            height='auto'
            style={{ aspectRatio: '16 / 9' }}
          />
        </div>
        <div className='mt-4 px-4'>
          <div className='flex flex-wrap font-sans'>
            <img src={netflixLogo} alt='NikahFix Logo' className='w-4 h-auto' />
            <span className='font-sans pl-1 text-gray-500 text-xs font-medium uppercase'>
              Documenter
            </span>
          </div>
          <div className='flex flex-col mt-2'>
            <div className='text-white text-xl font-sans font-bold'>
              Selamat Ulang Tahun Kyy ^^ 🎉🎉🎉
            </div>
            <div className='flex items-center'>
              <span className='text-green-500'>100% match</span>
              <span className='bg-slate-500 text-xs ml-2 px-1 py-0 rounded-sm'>
                SU
              </span>
              <span className='ml-2'>2024 1h 26m</span>
              <img src={logo4k} alt='logo4k' className='ml-2' />
              <img src={logo4k} alt='logo4k' className='ml-2' />
            </div>
            <div className='flex flex-col mt-2'>
              <span className='bg-[#E50913] px-2 py-0 max-w-fit flex items-center justify-center rounded-sm'>
                Hari ini 21 November 2024
              </span>
              <div className='text-white mt-2'>
              Selamat ulang tahun, Kyy! 🎉 Semoga harimu penuh kebahagiaan, kejutan seru, dan tentunya es krim yang enak 🍦🎂 Semoga semua impianmu terwujud dan hidupmu selalu dikelilingi kebahagiaan. Nikmati hari spesialmu, ya 🥳✨
              </div>
            </div>
            <div className='mt-6'>
              <header className='text-lg font-bold'>Breaking News</header>
              <img
                src={echidnaHeader}
                alt=''
                srcSet=''
                style={{ aspectRatio: '16 / 9' }}
                className='mt-2 rounded-md'
              />
              <div className='text-sm italic pt-2 text-gray-500'>
              <p className='mt-2'>
                Halo Kyy! Karena kamu adalah orang yang sangat berarti dalam hidup kami, kami ingin memberikan sesuatu yang spesial di hari ulang tahunmu ini!
              </p>
              <p className='mt-4'>
                Meskipun kami tidak bisa merayakannya bersama langsung, kami berharap kamu bisa merasakan kebahagiaan dan kasih sayang yang kami kirimkan untukmu.
              </p>
              <p className='mt-4'>
                Semoga tahun ini membawa banyak kebahagiaan, kesehatan, dan keberuntungan untukmu. Doa terbaik kami selalu menyertaimu!
              </p>
              <p className='mt-4'>
                Dengan penuh cinta,  
                <br />
                Hadiah spesial untukmu dari kami
              </p>
              </div>
            </div>
            <div className='mt-6'>
              <header className='text-lg font-bold'>Kado Spesial untuk Kyy</header>
              <div className='grid grid-cols-2 w-full gap-4'>
                <div className='flex flex-col'>
                  <img
                    src={lovely}
                    alt=''
                    srcSet=''
                    style={{ aspectRatio: '16 / 9' }}
                    className='mt-2 rounded-2xl'
                  />
                  <div className='flex flex-col mt-2'>
                    <span className='text-white'>Kyy</span>
                    <span className='text-sm text-gray-500 mt-2'>
                      Hadiah yang penuh cinta
                    </span>
                  </div>
                </div>
                <div className='flex flex-col'>
                  <img
                    src={lovely}
                    alt=''
                    srcSet=''
                    style={{ aspectRatio: '16 / 9' }}
                    className='mt-2 rounded-2xl'
                  />
                  <div className='flex flex-col mt-2'>
                    <span className='text-white'>Kyy</span>
                    <span className='text-sm text-gray-500 mt-2'>
                      Sebuah kado penuh kebahagiaan
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-6'>
              <header className='text-lg font-bold'>Our Journey With Kyy</header>
              <div className='grid grid-cols-1 gap-4'>
                {/* Episode1 */}
                <div className='flex flex-col'>
                  <div className='grid grid-cols-2 gap-5'>
                    <img
                      src={episode1}
                      alt=''
                      srcSet=''
                      style={{ aspectRatio: '16 / 9' }}
                      className='mt-2 rounded-2xl'
                    />
                    <div className='flex flex-col justify-center'>
                      <div className='text-white'>
                        Episode 1: The First Gift We Gave to Kyy
                      </div>
                      <div className='text-[#A3A1A1] text-sm mt-2'>
                        26m 10s
                      </div>
                    </div>
                  </div>
                </div>
                <div className='text-[#A3A1A1] text-sm'>
                  Kyy pertama kali menerima hadiah spesial dari kami yang penuh kasih
                </div>
                <div className='flex flex-col'>
                  <div className='grid grid-cols-2 gap-5'>
                    <img
                      src={episode2}
                      alt=''
                      srcSet=''
                      style={{ aspectRatio: '16 / 9' }}
                      className='mt-2 rounded-2xl'
                    />
                    <div className='flex flex-col justify-center'>
                      <div className='text-white'>
                        Episode 2: A Growing Love for Kyy
                      </div>
                      <div className='text-[#A3A1A1] text-sm mt-2'>
                        26m 10s
                      </div>
                    </div>
                  </div>
                </div>
                <div className='text-[#A3A1A1] text-sm'>
                  Hadiah untuk Kyy terus berkembang seiring dengan hubungan yang semakin dekat
                </div>
                <div className='flex flex-col'>
                  <div className='grid grid-cols-2 gap-5'>
                    <img
                      src={episode3}
                      alt=''
                      srcSet=''
                      style={{ aspectRatio: '16 / 9' }}
                      className='mt-2 rounded-2xl'
                    />
                    <div className='flex flex-col justify-center'>
                      <div className='text-white'>
                        Episode 3: The Best Gift Kyy Deserves
                      </div>
                      <div className='text-[#A3A1A1] text-sm mt-2'>
                        26m 10s
                      </div>
                    </div>
                  </div>
                </div>
                <div className='text-[#A3A1A1] text-sm'>
                  Setiap hadiah yang kami berikan selalu penuh dengan rasa sayang dan perhatian untuk Kyy
                </div>
                <div className='flex flex-col'>
                  <div className='grid grid-cols-2 gap-5'>
                    <img
                      src={episode4}
                      alt=''
                      srcSet=''
                      style={{ aspectRatio: '16 / 9' }}
                      className='mt-2 rounded-2xl'
                    />
                    <div className='flex flex-col justify-center'>
                      <div className='text-white'>
                        [Coming Soon] Final Episode: A Lifetime of Gifts for Kyy
                      </div>
                      <div className='text-[#A3A1A1] text-sm mt-2'>
                        26m 10s
                      </div>
                    </div>
                  </div>
                </div>
                <div className='text-[#A3A1A1] text-sm'>
                  Hadiah untuk Kyy akan terus berlanjut seiring perjalanan kita bersama
                </div>
              </div>
            </div>

            <div className='mt-6'>
              <header className='text-lg font-bold'>Our Love Gallery</header>
              <div className='grid grid-cols-3 gap-3'>
                <img
                  src={echidnaImage}
                  alt=''
                  srcSet=''
                  style={{ aspectRatio: '9 / 16' }}
                  className='rounded-2xl hover:scale-125 transition-all duration-300 ease-in-out'
                />
                <img
                  src={echidnaImage}
                  alt=''
                  srcSet=''
                  style={{ aspectRatio: '9 / 16' }}
                  className='rounded-2xl hover:scale-125 transition-all duration-300 ease-in-out'
                />
                <img
                  src={echidnaImage}
                  alt=''
                  srcSet=''
                  style={{ aspectRatio: '9 / 16' }}
                  className='rounded-2xl hover:scale-125 transition-all duration-300 ease-in-out'
                />
                <img
                  src={echidnaImage}
                  alt=''
                  srcSet=''
                  style={{ aspectRatio: '9 / 16' }}
                  className='rounded-2xl hover:scale-125 transition-all duration-300 ease-in-out'
                />
                <img
                  src={echidnaImage}
                  alt=''
                  srcSet=''
                  style={{ aspectRatio: '9 / 16' }}
                  className='rounded-2xl hover:scale-125 transition-all duration-300 ease-in-out'
                />
                <img
                  src={echidnaImage}
                  alt=''
                  srcSet=''
                  style={{ aspectRatio: '9 / 16' }}
                  className='rounded-2xl hover:scale-125 transition-all duration-300 ease-in-out'
                />
                <img
                  src={echidnaImage}
                  alt=''
                  srcSet=''
                  style={{ aspectRatio: '9 / 16' }}
                  className='rounded-2xl hover:scale-125 transition-all duration-300 ease-in-out'
                />
                <img
                  src={echidnaImage}
                  alt=''
                  srcSet=''
                  style={{ aspectRatio: '9 / 16' }}
                  className='rounded-2xl hover:scale-125 transition-all duration-300 ease-in-out'
                />
                <img
                  src={echidnaImage}
                  alt=''
                  srcSet=''
                  style={{ aspectRatio: '9 / 16' }}
                  className='rounded-2xl hover:scale-125 transition-all duration-300 ease-in-out'
                />
              </div>
            </div>
            <div className='mt-6'>
              <header className='text-lg font-bold'>Wish for the couple</header>
              <div
                className='max-h-[55svh] min-h-[15svh] overflow-y-auto mt-2 bottom-0'
                ref={scrollCommentRef}
              >
                {!loading &&
                  comments?.map((item, i) => (
                    <div key={i} className='flex pt-2'>
                      <div className='flex items-center'>
                        <img
                          src={GuestIcon}
                          alt=''
                          srcSet=''
                          className='w-6 h-auto'
                        />
                      </div>
                      <div className='flex flex-col ps-2 justify-between items-start w-full h-full text-sm pt-2'>
                        <div className='text-white text-sm capitalize'>
                          {item.name}
                        </div>
                        <div className='text-gray-400'>{item.message}</div>
                      </div>
                    </div>
                  ))}
              </div>

              <form onSubmit={handleSubmit} className='space-y-4 mt-4 relative'>
                <div className='pb-2'>
                  <label htmlFor='' className='mb-2 font-sans'>
                    Name
                  </label>
                  <input
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='w-full mt-4 p-2 text-black font-sans'
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor='' className='mb-2 font-sans'>
                    Message
                  </label>
                  <textarea
                    value={message}
                    aria-expanded={false}
                    onChange={(e) => setMessage(e.target.value)}
                    className='w-full mt-4 text-black p-2 font-sans'
                    disabled={isSubmitting}
                  />
                </div>
                <button
                  type='submit'
                  className='w-full bg-black'
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </form>
            </div>
            <div className='mt-6 text-center text-sm'>
              <span className=''>
                Thank you for checking up all the things up there!
              </span>
              <br />
              <span>Can’t wait to see u again!</span>
            </div>
            <div className='mt-12 text-xs text-center text-[#A3A1A1]'>
              Cloning with ❤️ by janexmgd & supported by Echidna
            </div>
            <div className='mt-5 text-xs cursor-pointer text-center mb-5'>
              <a
                href='https://www.nikahfix.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                thx nikahfix.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className='flex w-full bg-black text-white pb-4 cursor-not-allowed h-svh text-4xl text-center justify-center items-center'>
      Loading
    </div>
  );
};

export default DetailPage;
