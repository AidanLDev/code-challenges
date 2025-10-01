interface IUser {
  userId: number;
  peopleYouFollowIds: number[];
}

interface ITweet {
  tweetId: number;
  userId: number;
  idxAdded: number; // Just going to use an index to track when the tweet was added, in a real scenario I'd use a dateTimeStamp instead
}

/**
 * @description A simplified version of Twitter where users can post tweets, follow/unfollow another user, and is able to see the 10 most recent tweets in the user's news feed
 */
class Twitter {
  private tweetIdx: number = 0;
  private readonly tweetsPerUser: Map<number, ITweet[]> = new Map();
  private readonly follows: Map<number, Set<number>> = new Map();

  constructor() {}

  /**
   * @description Composes a new tweet with ID tweetId by the user userId. Each call to this function will be made with a unique tweetId
   * @param userId The userId of the user who is posting the tweet.
   * @param tweetId The tweetId of the tweet being posted.
   */
  postTweet(userId: number, tweetId: number): void {
    this.tweetIdx++;
    const tweet: ITweet = { tweetId, userId, idxAdded: this.tweetIdx };
    const arr = this.tweetsPerUser.get(userId) ?? [];
    arr.push(tweet);
    this.tweetsPerUser.set(userId, arr);
  }

  /**
   * @description Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent.
   * @param userId The userId of the user whose news feed is to be retrieved.
   */
  getNewsFeed(userId: number): number[] {
    const followees = new Set<number>(this.follows.get(userId) ?? []);
    followees.add(userId); // Need to include our own tweets
    const allTweets: ITweet[] = [];
    followees.forEach((id) => {
      const arr = this.tweetsPerUser.get(id);
      if (arr) allTweets.push(...arr);
    });
    allTweets.sort((a, b) => b.idxAdded - a.idxAdded);
    return allTweets.slice(0, 10).map((tweet) => tweet.tweetId);
  }

  /**
   * @description The user with ID followerId started following the user with ID followeeId.
   * @param followerId The ID of the user who is following another user.
   * @param followeeId The ID of the user to be followed.
   */
  follow(followerId: number, followeeId: number): void {
    if (followerId === followeeId) return;
    const set = this.follows.get(followerId) ?? new Set<number>();
    set.add(followeeId);
    this.follows.set(followerId, set);
  }

  /**
   * @description The user with ID followerId started unfollowing the user with ID followeeId.
   * @param followerId The ID of the user who is unfollowing another user.
   * @param followeeId The ID of the user to be unfollowed.
   */
  unfollow(followerId: number, followeeId: number): void {
    if (followeeId === followerId) return;
    const set = this.follows.get(followerId);
    if (set) {
      set.delete(followeeId);
      if (set.size === 0) this.follows.delete(followerId);
    }
  }
}
