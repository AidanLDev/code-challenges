-- SQL request(s)​​​​​​‌​‌​‌‌‌​‌​​‌‌​​​​​‌​‌‌‌​​ below
/*
    FIND Color that was used the most
*/
SELECT newColor as color, COUNT(newColor) as count
FROM pixelUpdates
INNER JOIN pixels
    ON pixels.ID = pixelUpdates.PIXELID
where pixelUpdates.UPDATEDAT > pixels.FIRSTPAINTEDAT
GROUP BY newColor
order by count(newColor) DESC