import axios from 'axios';
import {WatchFace} from '../../types/WatchFace';

export const getWatchFaceListAsync = async (
  slug: string,
): Promise<WatchFace[] | null> => {
  debugger;
  const response = await axios.get(
    'https://technosconnect.grupotechnos.com.br/api/v2/watch_faces?smart_watch_slug=' +
      slug,
  );

  if (response.status === 200) {
    const parsedResponse = response.data.map((item: any) => {
      return {
        id: item.id,
        name: item.name,
        available: item.show_app,
        preview: item.preview,
        section: item.section ?? '',
      } as WatchFace;
    });
    return parsedResponse;
  }
  return null;
};
