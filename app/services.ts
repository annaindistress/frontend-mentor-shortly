const api_url = "https://tinyurl.com/api-create.php";

export async function getShortUrl(url: string) {
  try {
    const response = await fetch(`${api_url}?url=${url}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.text();
    return { status: true, data };
  } catch (error) {
    if (error instanceof Error) {
      const data = `Fetch error: ${error.message}`;
      return { status: false, data };
    }
  }
}
